import PropTypes from 'prop-types';
const Bookmark = ({bookmark}) => {
    const {title} = bookmark;
    return (
        <div className='bg-slate-300 p-4 m-4 rounded-xl'>
            <h3 className='md:w-1/3'>{title}</h3>
        </div>
    );
};

Bookmark.propTypes = {
    bookmark: PropTypes.object
}
export default Bookmark;