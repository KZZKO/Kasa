import './title.scss';

export const Title = ({ data }) => {
    return (
        <div className='title-main'>
            <h1>{data}</h1>
        </div>
    )
}