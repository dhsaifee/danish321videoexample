function getBooks() {
  const allBooksApiUrl = 'https://localhost:7123/api/books/'

  fetch(allBooksApiUrl)
    .then(function (response) {
      console.log(response)
      return response.json()
    })
    .then(function (json) {
      console.log(json)
      let html = '<ul>'
      json.forEach((book) => {
        html += `<li>${book.title} written by ${book.author}</li>`
      })
      html += '</ul>'
      document.getElementById('books').innerHTML = html
    })
    .catch(function (error) {
      console.log(error)
    })
}

function postBook() {
  const postBookApiUrl = 'https://localhost:7123/api/books'
  const bookTitle = document.getElementById('title').value
  const bookAuthor = document.getElementById('author').value

  fetch(postBookApiUrl, {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      title: bookTitle,
      author: bookAuthor,
    }),
  }).then((response) => {
    console.log(response)
    getBooks()
  })
}
