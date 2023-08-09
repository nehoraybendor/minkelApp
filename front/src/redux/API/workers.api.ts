import { mainApi } from "./main.api";

// ! we stop here because of auth is not working now !

const workersAPI = mainApi.injectEndpoints({
    endpoints: (build) => ({
        findAllWorkers: build.query<Worker[], number>({
            query: (page) => ({
                url:'workers/'
            })
        })
    })
})