import { EventDetails } from "./event-details";

export const MOCK_EVENTS: EventDetails[] = [
    { 
        id: 1, 
        name: 'Arraiá da Maiara & Maraisa', 
        city: 'São Paulo', 
        state: 'SP',
        photo: 'assets/banner-maiara-e-maraisa.webp', 
        availableTicketUnits: 12000,
        date: new Date('2025-07-25'), 
        hour: '20:00', 
        houseName: 'CTN',
        address: 'Rua Jacofer, 615 - Bairro do Limão - São Paulo - SP', 
        mininumAge: '18 Anos - 12 a 16 anos acompanhados pelos pais ou responsáveis',
        category: 'Show'
    },
    { 
        id: 2, 
        name: 'Marcos & Belutti', 
        city: 'São Paulo', 
        state: 'SP',
        photo: 'assets/banner-marcos-e-belutti.webp', 
        availableTicketUnits: 12000,
        date: new Date('2025-07-25'), 
        hour: '22:00', 
        houseName: 'Espaço Unimed',
        address: 'Rua Tagipuru, 795 - Barra Funda - São Paulo - SP', 
        mininumAge: '18 Anos - 12 a 16 anos acompanhados pelos pais ou responsáveis',
        category: 'Show' 
    },
    { 
        id: 3, 
        name: 'Festival Simplifica com Armandinho, Lagum, Jota pê e Raimundos', 
        city: 'Ouro Preto', 
        state: 'MG',
        photo: 'assets/banner-simplifica-festival.webp', 
        availableTicketUnits: 12000,
        date: new Date('2025-08-23'), 
        hour: '16:00', 
        houseName: 'Centro de Convenções UFOP',
        address: 'Rua Diogo de Vasconcelos, S/N - Pilar - Ouro Preto - MG', 
        mininumAge: '18 Anos',
        category: 'Festival' 
    },
    { 
        id: 4, 
        name: 'Jantar Show Frejat', 
        city: 'Santo André', 
        state: 'SP',
        photo: 'assets/frejat.webp', 
        availableTicketUnits: 2000,
        date: new Date('2025-08-22'), 
        hour: '19:00', 
        houseName: 'Espaço Win',
        address: 'Av. Dom Pedro II, 2.055 - Campestre - Santo André - SP', 
        mininumAge: '18 Anos - 14 anos somente acompanhado dos pais ou responsáveis',
        category: 'Jantar Show' 
    },
];
