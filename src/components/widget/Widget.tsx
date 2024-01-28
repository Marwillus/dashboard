import { ArrowRightUp } from '@icon-park/react'
import './Widget.scss'

interface WidgetProps {
    author: string | null
    title: string | null
    description: string | null
    url: string | null
    urlToImage: string | null
    content: string | null
}

function Widget({ author, title, description, url, urlToImage, content }: WidgetProps) {
    return (
        <div className='widget'>
            {urlToImage && <div className="widget__image">
                <img src={urlToImage} alt={title + ' image'} />
            </div>}
            <h4 className='widget__header'>{title}</h4>
            {description && <p className='widget__description'>{description}</p>}
            {url && <button className='widget__button'>
                <a href={url} rel="noopener noreferrer" target='_blank'>Go To Article<ArrowRightUp /></a>
            </button>}
        </div>
    )
}

export default Widget