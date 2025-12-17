import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import type { Item } from '../data/mockdata';

interface Props {
    title?:string;
    colorClass:string;
    items:Item[]
}

function Group(props: Props) {
    const {title,colorClass,items} = props
    if(items.length === 0){
        return(
            <div className="min-w-[30%]">
                <p className="text-md font-medium mb-3">{title}</p>
                <p className="text-sm text-slate-500">No matches</p>
            </div>
        )
    }
    return (
        <div className="min-w-[30%]">
            <p className="text-md font-medium mb-3">{title}</p>
            {items.map((item, index) => (
                <div
                key={`${title}-${item.name}-${index}`}
                className="mb-3 flex flex-row items-center gap-2 rounded px-2 py-1 hover:bg-slate-100 transition cursor-pointer"
                >
                <span className={`${colorClass} rounded-sm p-0.5`}>
                    <FontAwesomeIcon icon={item.iconName} />
                </span>
                <span className="text-slate-700">{item.name}</span>
                </div>
            ))}
        </div>
    )
}

export default Group
