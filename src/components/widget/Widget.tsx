import { ArrowRightUp, Close, ReadBook } from '@icon-park/react'
import './Widget.scss'
import { useEffect, useRef } from 'react'

// const SHAPES = {
//     SQUARE: 'square',
//     CIRCLE: 'circle'
// } as const

enum SHAPES {
    SQUARE= 'square',
    CIRCLE= 'circle'
  }
  
type shape = `${SHAPES}`;

interface WidgetProps {
    shape: shape
    author?: string | null
    title: string | null
    description?: string | null
    url?: string | null
    urlToImage?: string | null
    content?: string | null
}

function Widget({ shape, author, title, description, url, urlToImage, content }: WidgetProps) {
    const modal = useRef<HTMLDialogElement>(null)

    const openModal = () => {
        if (!modal.current) return
        modal.current.showModal();
    }

    const closeModal = () => {
        if (!modal.current) return

        modal.current.setAttribute("closing", "");

        modal.current.addEventListener(
            "animationend",
            () => {
                if (!modal.current) return

                modal.current.removeAttribute("closing");
                modal.current.close();
            },
            { once: true }
        );
    }

    return (
        <div className={`widget widget--${shape}`}>
            {urlToImage && <div className="widget__image">
                <img src={urlToImage} alt={title + ' image'} />
            </div>}
            <h4 className='widget__header'>{title}</h4>
            {description && <p className='widget__description'>{description}</p>}
            <div className="widget__button-group">
                {content && <button className="widget__button" onClick={openModal}>Read more <ReadBook /></button>}
                {url && <button className='widget__button'>
                    <a href={url} rel="noopener noreferrer" target='_blank'>Go to article<ArrowRightUp /></a>
                </button>}
            </div>
            {content && <dialog ref={modal} className='modal'>
                <button className='close' onClick={closeModal}><Close /></button>
                <h3>{title}</h3>
                <p>{content}</p>
            </dialog>
            }
        </div>
    )
}

export default Widget