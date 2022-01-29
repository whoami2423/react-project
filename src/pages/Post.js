import {useParams} from 'react-router-dom';
import {useSelector} from 'react-redux';

function Post() {
  const params = useParams();
  const id = parseInt(params.id, 10);

  const [user] = useSelector(state => state.people.filter(user => user.id === id));

  return (
    <div>
      <h1>Name: {user.name}</h1>
      <h2>Age: {user.age}</h2>
      <h3>Hobby: {user.hobby}</h3>
    </div>
  );
}

export default Post;
