import { IProductDocument } from "@interfaces/product";
import { ProductModel } from "@models/product";
import { ListProductsAggregator } from "@services/query/aggregates";
import Paginate from "@services/query/paginate";

export const GetProductById = async (id: string): Promise<IProductDocument | null> => {
    const product = await ProductModel
        .findById(id)
        .populate('uploaded_by', 'email')

    return product;
}

export const ListAllProducts = async (page: number, limit: number, query: string, order_by: string, sort_by: string, filter: Record<string, any>): Promise<any> => {
    let aggregate = [...ListProductsAggregator] as Array<any>;
    let match: { [key: string]: any } = {};
  
    if (Object.keys(filter).length > 0) {
      for (const key in filter) {
        let filterValue = filter[key];
        let newMatch: { [key: string]: any } = {};

        if (key === "email") {
            newMatch[key] = { $regex: filterValue, $options: "i" };
        }

        if (key === "category") {
            newMatch[key] = { $regex: filterValue, $options: "i" };
        }

        match = { ...match, ...newMatch };
        }
    }

    if (query) {
        match = {
            ...match,
            $or: [
                { name: { $regex: query, $options: "i" } },
                { description: { $regex: query, $options: "i" } },
            ],
        };
    }

    if (Object.keys(match).length > 0) {
        aggregate.push({ $match: match });
    }

    aggregate.push({ $sort: { [sort_by]: order_by === "desc" ? -1 : 1 } });

    return await Paginate<IProductDocument>(ProductModel, aggregate, page, limit);

}
