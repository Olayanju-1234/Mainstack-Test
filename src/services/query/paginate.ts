import { IPaginate } from "@interfaces/paginate";
import { Document, Model, Aggregate } from "mongoose";

async function Paginate<T extends Record<string, any>>(
  model: Model<T>,
  aggregate: Array<any>,
  page: number,
  limit: number
): Promise<IPaginate<T>> {
  const pipeline = [
    {
      $facet: {
        totalData: [...aggregate, { $skip: page * limit }],
        totalCount: [...aggregate, { $count: "count" }],
      },
    },
  ];

  if (limit > 0) {
    pipeline[0].$facet.totalData.push({ $limit: limit });
  }

  const data = await model.aggregate(pipeline);

  let { totalCount, totalData } = data[0];

  return {
    results: totalData,
    currentPage: page + 1,
    totalPages: Math.ceil(totalCount.length ? totalCount[0].count / limit : 0),
    totalResults: totalCount.length ? totalCount[0].count : 0,
  };
}

export default Paginate;
