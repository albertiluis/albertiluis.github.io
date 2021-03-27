var token = 'IGQVJVSzBVLU5TdUt2RWFJXzI5enZAZATkgxVHpfU2dOV045ak9ZAbERJaEdGTHpOVEIxd0hiUlo0TThDYVlRSnJNM3ViOFBtc2FBLUhfSVNkSm9IMjYySmtyOWZAGRlMyUVlobUVORUpKQVhYeE9WU3JzNQZDZD'
var url = 'https://graph.instagram.com/me/media?fields=id,caption,media_url,media_type&access_token=' + token

const cardImage = document.getElementById('instaImage')
const cardText = document.getElementById('instaCaption')

function cardMount() {
    fetch(url, {
        method: 'GET',
    })
        .then(resp => resp.json())
        .then(data => {

            var card = document.getElementById('cardMount')

            var feed = ''

            data.data.slice(0, 8).forEach((element) => {
                
                    if (element.media_type === 'IMAGE' || element.media_type === 'CAROUSEL_ALBUM') {
                        feed += `<div class="col-6 col-md-3">
                                    <div class="card mb-3">
                                        <img class="card-img-top" id="instaImage" src="${element.media_url}" alt="Card image cap">
                                        <div class="card-body" >
                                            <p class="card-text" id="instaCaption" style="color: #000; height: 120px; overflow-y: hidden; text-overflow: ellipsis">${element.caption}</p>
                                        </div>
                                    </div>
                                </div>`
                    }
             console.log(element)
            })

            card.innerHTML = feed

        })
        .catch(err => console.log(err))
}

cardMount()

