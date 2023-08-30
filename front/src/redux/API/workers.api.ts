import { WorkerEntity } from "../interfaces/workers";
import { mainApi } from "./main.api";



const workersAPI = mainApi.injectEndpoints({

    endpoints: (build) => ({

        findAllWorkers: build.query<WorkerEntity[], number>({
            query: (page) => ({
                url: 'workers/',
                method: 'GET',
            }),
            providesTags: ["Worker"]
        }),
        createWorker: build.mutation<WorkerEntity[], WorkerEntity>({
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