import './tag.scss';

export const Tags = ({ data }) => {
    return (
        <div className='tag-bloc'>
            <ul>
                {data.map((tag, index) => (
                    <li key={index}>{tag}</li>
                ))}
            </ul>
        </div>
    );
};