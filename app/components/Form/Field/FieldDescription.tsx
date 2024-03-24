interface FieldDescriptionProps
{
    children: string;
}
export default function FieldDescription( { children }: FieldDescriptionProps )
{
    return (
        <p className="font-bold space-x-1 tracking-wider">{children}</p>
    )
}