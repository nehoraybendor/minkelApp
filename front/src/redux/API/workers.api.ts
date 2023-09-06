import { WorkerEntity, workerFromDB } from "../../types/entities/worker";
import { mainApi } from "./main.api";



const workersAPI = mainApi.injectEndpoints({

    endpoints: (build) => ({

        findAllWorkers: build.query<workerFromDB[], number>({
            query: (page) => ({
                url: 'workers/',
                method: 'GET',
            }),
            providesTags: ["Worker"]
        }),
        createWorker: build.mutation<workerFromDB[], WorkerEntity>({
            query: (body) => ({
                url: "workers/",
                method: "POST",
                body
            }),
            invalidatesTags: ["Worker"]
        })
    })
})

export const { useFindAllWorkersQuery, useCreateWorkerMutation } = workersAPI