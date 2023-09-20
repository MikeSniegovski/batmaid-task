export enum JobType {
    home_cleaning = "HOME_CLEANING",
    end_of_tenancy = "END_OF_TENANCY"
}

export interface Job {
    "uuid": string,
    "amount": number,
    "currency": string,
    "executionDate": string,
    "agent": string,
    "contractPeriodicity": number,
    "floorAndDoor": string,
    "locationComment": string,
    "type": JobType,
    "duration": number,
    "location": string,
    "locationUuid": string
}