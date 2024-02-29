import Avatar from "antd/es/avatar/avatar"
export default function AvatarLetter({name}:{name:string})
{

    return (
        <Avatar style={{ backgroundColor: '#fde3cf', color: '#f56a00' }}>{name.charAt(0)}</Avatar>
    )

}