import axios from 'axios';

const fetchUsers = () => {
	return {
		type: 'FETCH_USER',
		payload: axios.get("https://randomuser.me/api/jkgvkv")
	}
}

export default fetchUsers;