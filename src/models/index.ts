import { AxiosPromise, AxiosRequestConfig } from "axios";

type Request = {
    get: (config: AxiosRequestConfig) => AxiosPromise<any>;
    post: (config: AxiosRequestConfig) => AxiosPromise<any>;
    put: (config: AxiosRequestConfig) => AxiosPromise<any>;
};

interface ReduxModel {
    userInfo: any;
}

export type {
    ReduxModel,
    Request

}