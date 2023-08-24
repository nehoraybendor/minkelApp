import { WorkerEntity } from "../interfaces/workers";
import { mainApi } from "./main.api";



const workersAPI = mainApi.injectEndpoints({
   
    endpoints: (build) => ({
        
        findAllWorkers: build.query<WorkerEntity[], number>({
            query: (page) => ({
                url:'workers/list',
                method: 'GET',
            }),
            providesTags:["Worker"]
        }),
        
    })
})

export const {useFindAllWorkersQuery} = workersAPI