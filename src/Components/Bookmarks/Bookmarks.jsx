import PropTypes from 'prop-types'
import Bookmark from '../Bokmark/Bookmark';
const Bookmarks = ({bookmarks, readingTime}) => {
    return (
        <div className="md:w-1/3 bg-gray-200 ml-4 pt-6 rounded-xl mt-10">
            <div className='bg-white mx-2 py-4 rounded-xl mb-4'>
                <h3 className='text-4xl text-center'>Reading Time: {readingTime}</h3>
            </div>
            <h2 className="text-3xl text-center ">Bookmarked Blogs: {bookmarks.length}</h2>{
                bookmarks.map(bookmark => <Bookmark key={bookmark.id} bookmark={bookmark}></Bookmark> )
            }
        </div>
    );
};

Bookmarks.propTypes = {
    bookmarks: PropTypes.array,
    readingTime: PropTypes.number
}
export default Bookmarks;