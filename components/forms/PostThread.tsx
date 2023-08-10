interface Props {
  userId: string;
}

function PostThread({ userId }: Props) {
  

  return (
    <h1 className="text-light-1">Post Thread form {`${userId}`} </h1>
  );
}

export default PostThread;