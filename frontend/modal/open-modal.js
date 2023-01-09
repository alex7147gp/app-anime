import ModalVideo from 'modal-video'
import 'modal-video/css/modal-video.min.css'


export const openModal = videoId => {
    const buton = document.createElement('BUTTON')
    buton.dataset.videoId = videoId
    new ModalVideo([buton])
    buton.click()
}