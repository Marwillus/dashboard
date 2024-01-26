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
            <div className='widget__content'>
                <h4>{title}</h4>
                {url && <button className='link-button'>
                    <a href={url}>{author}</a>
                </button>}
            </div>
        </div>
    )
}

export default Widget