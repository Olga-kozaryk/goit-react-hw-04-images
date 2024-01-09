import axios from "axios";

export const fetchImages =async (searchText, page) => {
const response = await axios.get('https://pixabay.com/api/', {
  method: 'get',
  params: {
    q: searchText,
    page: page,
    key: '35073598-f2a52a45f6e7203dfdfac4edb',
    image_type: 'photo',
    orientation: 'horizontal',
    per_page: 12,
  }
});
return response.data;
}