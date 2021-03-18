var token = 'IGQVJVSzBVLU5TdUt2RWFJXzI5enZAZATkgxVHpfU2dOV045ak9ZAbERJaEdGTHpOVEIxd0hiUlo0TThDYVlRSnJNM3ViOFBtc2FBLUhfSVNkSm9IMjYySmtyOWZAGRlMyUVlobUVORUpKQVhYeE9WU3JzNQZDZD'
var url = 'https://graph.instagram.com/me/media?fields=id,caption,media_url,media_type&access_token=IGQVJVSzBVLU5TdUt2RWFJXzI5enZAZATkgxVHpfU2dOV045ak9ZAbERJaEdGTHpOVEIxd0hiUlo0TThDYVlRSnJNM3ViOFBtc2FBLUhfSVNkSm9IMjYySmtyOWZAGRlMyUVlobUVORUpKQVhYeE9WU3JzNQZDZD'


var urlImage = 'https://graph.instagram.com/18099540532217723?fields=id,caption,media_type,media_url,username,timestamp&access_token=IGQVJVSzBVLU5TdUt2RWFJXzI5enZAZATkgxVHpfU2dOV045ak9ZAbERJaEdGTHpOVEIxd0hiUlo0TThDYVlRSnJNM3ViOFBtc2FBLUhfSVNkSm9IMjYySmtyOWZAGRlMyUVlobUVORUpKQVhYeE9WU3JzNQZDZD'

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

            data.data.forEach((element) => {
                if (element.media_type === 'IMAGE') {
                    feed += `<div class="col-md-3">
                                <div class="card mb-2">
                                    <img class="card-img-top" id="instaImage" src="${element.media_url}" alt="Card image cap">
                                    <div class="card-body" >
                                        <p class="card-text" id="instaCaption" style="height: 120px; overflow-y: hidden; text-overflow: ellipsis">${element.caption}</p>
                                    </div>
                                </div>
                            </div>`
                }
            })
            card.innerHTML = feed
        })
        .catch(err => console.log(err))
}

cardMount()

