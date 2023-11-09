import classNamesBind from 'classnames/bind';
import classNamesDedupe from 'classnames/dedupe';

const useClassNames = (thisarg) => {
    // Bind classnames to the provided 'thisarg'
    const cxBind = classNamesBind.bind(thisarg);

    // Return a function that generates de-duped class names
    return (...classes) => {
        // Bind the classnames and dedupe the resulting class names
        const cxDedupe = classNamesDedupe(cxBind(...classes));

        return cxDedupe;
    };
};

export default useClassNames;
