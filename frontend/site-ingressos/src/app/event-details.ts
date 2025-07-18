export interface EventDetails {
    id: number;
    name: string;
    city: string;
    state: string;
    photo: string;
    availableTicketUnits: number;
    date: Date;
    hour: string;
    houseName: string;
    address: string;
    mininumAge: string;
    category?: string;
    tickets?: { 
        name: string;
        price: string
    }[];
}