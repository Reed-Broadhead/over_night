interface Content {
    content: string,
    languageCode: string
}
interface Data {
    S2C: string,
    accommodationTypecode?: string
    address: Content,
    chainCode?: string,
    city: Content,
    code: number,
    coordinates?: {
        latitude?: number,
        longitude?: number
    },
    countryCode: string,
    description: Content,
    destinationCode: string,
    // facilities?: array[obj]
    images: {
        imageTypeCode?: string,
        order?: number,
        path?: string,
        visualOrder?: number
    }[],
    lastUpdate: string
    name: Content,
    nameId: number,
    phones?: {
        phoneNumber?: string,
        phoneType?: string
    }[]
    postalCode?: string,
    ranking: number,
    rooms?: {
        roomCode?: string,
        description?: string,
        roomStays?: {
            description?: string,
            order?: string,
            stayType?: string
        }[]
        roomType?: string,
    }[],
    statesCode?: string,
    web?: string,
    zoneCode?: number
}

export default Data
