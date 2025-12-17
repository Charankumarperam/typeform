
import { 
    faAddressBook,
    faEnvelope,
    faPhone,
    faLocationDot,
    faLink,
    faArrowDownAZ,
    faArrowDown,
    faImage,
    faThumbsUp,
    faScaleBalanced,
    faCheck,
    faGaugeSimple,
    faChartSimple,
    faStar,
    faArrowDown19,
    faBraille,
    faAlignJustify,
    faAlignCenter,
    faPlay,
    faMicrophoneLines,
    faMessage,
    faHashtag,
    faCalendar,
    faCreditCard,
    faFileArrowUp,
    faHardDrive,
    faCalendarDay,
    faBox,
    faPaperPlane,
    faQuoteLeft,
    faTableCellsLarge,
    faTableCells,
    faArrowUpRightFromSquare,
 } from "@fortawesome/free-solid-svg-icons"

export type Item = { 
    name: string; 
    iconName: any 
};

export const contactInfo:Item[] =[
    {
        name:'Contact info',
        iconName:faAddressBook
    },
    {
        name:'Email',
        iconName:faEnvelope
    },
    {
        name:'Phone Number',
        iconName:faPhone
    },
    {
        name:'Address',
        iconName:faLocationDot
    },
    {
        name:'Website',
        iconName:faLink
    },
]
export const choice:Item[] = [
    {
        name:'Multiple Choice',
        iconName:faArrowDownAZ
    },
    {
        name:'Dropdown',
        iconName:faArrowDown
    },
    {
        name:'Picture Choice',
        iconName:faImage
    },
    {
        name:'Yes/No',
        iconName:faThumbsUp,
    },
    {
        name:'Legal',
        iconName:faScaleBalanced
    },
    {
        name:'CheckBox',
        iconName:faCheck
    },
]
export const ratingRanking:Item[] = [
    {
        name:'Net Promoter Score',
        iconName:faGaugeSimple
    },
    {
        name:'Online Scale',
        iconName:faChartSimple
    },
    {
        name:'Rating',
        iconName:faStar
    },
    {
        name:'Ranking',
        iconName:faArrowDown19
    },
    {
        name:'Matrix',
        iconName:faBraille
    },
]
export const textVideo:Item[] =[
    {
        name:'Long Text',
        iconName:faAlignJustify
    },
    {
        name:'Short Text',
        iconName:faAlignCenter
    },
    {
        name:'Video and Audio',
        iconName:faPlay
    },
    {
        name:'Clarify with AI',
        iconName:faMicrophoneLines
    },
    {
        name:'FAQ with AI',
        iconName:faMessage
    },

]
export const others:Item[]=[
    {
        name:'Number',
        iconName:faHashtag
    },
    {
        name:'Date',
        iconName:faCalendar
    },
    {
        name:'Payment',
        iconName:faCreditCard
    },
    {
        name:'File Upload',
        iconName:faFileArrowUp
    },
    {
        name:'Google Drive',
        iconName:faHardDrive
    },
    {
        name:'Calendly',
        iconName:faCalendarDay
    },
]
export const nohead:Item[]=[
    {
        name:'Welcome Screen',
        iconName:faBox
    },
    {
        name:'Partial submit point',
        iconName:faPaperPlane
    },
    {
        name:'Statement',
        iconName:faQuoteLeft
    },
    {
        name:'Number',
        iconName:faHashtag
    },
    {
        name:'Question Group',
        iconName:faTableCellsLarge
    },
    {
        name:'Multi-Question page',
        iconName:faTableCells
    },
    {
        name:'End Screen',
        iconName:faBox
    },
    {
        name:'Redirect to URl',
        iconName:faArrowUpRightFromSquare
    },
]