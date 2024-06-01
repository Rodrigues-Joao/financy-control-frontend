import { IconProp } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
interface ItemListIconProps
{
    icon: IconProp;
    color: string;
    backgoundColor?: string

}
export default function ItemListIcon( { icon, color, backgoundColor }: ItemListIconProps )
{
    return (
        <div className={`w-10 h-10  flex items-center rounded ${ backgoundColor }`} >
            <FontAwesomeIcon className="w-10" icon={icon} color={color} />
        </div>
    )
}