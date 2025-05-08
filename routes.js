const express = require('express');

const router = express.Router();

const fake_data = [
  {
  "id": 1,
  "title": "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
  "body": "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto"
},
{
  "id": 2,
  "title": "Lorem ipsum dolor sit",
  "body": "Ipsum dolor sit amet consectetur, adipisicing elit. Dignissimos sequi illum aut dolorem id corrupti, accusamus quasi neque possimus perferendis, a reprehenderit similique natus iste animi impedit officiis at in"
},
{
  "id": 3,
  "title": "Title 03",
  "body": "reprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto"
}
]

router.get('/test', (req, res) => {
  res.status(200).json(fake_data)
});

router.get('/test/:id', (req, res) => {
  const id = req.params.id
  const data = fake_data.find((item) => item.id == id)
  res.status(200).json(data)
})

module.exports = router;
