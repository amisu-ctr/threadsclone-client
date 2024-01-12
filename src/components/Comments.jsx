import {Avatar, Flex} from '@chakra-ui/react'
import {useState} from 'react'

function Comments({userAvatar, createdAt, comment, username, likes}) {
    const [liked, setLiked] = useState(false)
  return (
    <>
    <Flex gap={4} py={2} y={2} w={'full'}>
        <Avatar src={userAvatar} size={'sm'} />
        <Flex gap={1} ></Flex>
    </Flex>
    </>
  )
}

export default Comments