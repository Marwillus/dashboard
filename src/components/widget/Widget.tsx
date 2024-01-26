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
            <h3>{title}</h3>
            <p>{author}</p>
            {urlToImage && <div className="widget__img">
                <img src={urlToImage} alt={title + ' image'} />
            </div>}
            {url && <div>
                <a href={url}>to source</a>
            </div>}
        </div>
    )
}

export default Widget