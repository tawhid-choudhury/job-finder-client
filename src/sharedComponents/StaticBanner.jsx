import PropTypes from 'prop-types';

const StaticBanner = ({ imgUrl, heading, height }) => {
    const bannerStyles = {
        minHeight: height || '100vh',
        backgroundImage: `url(${imgUrl})`,
    };

    return (
        <div className='w-full -z-50 w-full h-full bg-gradient-to-r from-blue-500 via-success to-primary animate-gradient'>
            <div className="hero" style={bannerStyles}>
                <div className={imgUrl ? 'hero-overlay bg-opacity-60' : 'bg-opacity-50 w-full h-full bg-gradient-to-r from-blue-500 via-success to-primary animate-gradient'}></div>
                <div className="hero-content text-center text-neutral-content">
                    <div className="max-w-md">
                        <h1 className="mb-5 text-5xl font-bold">{heading}</h1>
                    </div>
                </div>
            </div>
        </div>
    );
};

StaticBanner.propTypes = {
    imgUrl: PropTypes.string,
    heading: PropTypes.string,
    height: PropTypes.string,
};

export default StaticBanner;
