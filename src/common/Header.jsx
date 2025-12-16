const Header = ({route, subRoute}) => {
    return (
        <div className="border-b border-gray-200">
            <div className="px-6 pt-6 pb-3 text-sm flex gap-2 items-center text-gray-500">
                <span>{route}</span>
                <span>/</span>

                {/* Active tab */}
                <span className="relative font-medium text-blue-600">
          {subRoute}

                    {/* Blue underline */}
                    <span className="absolute left-0 -bottom-3 w-full h-0.5 bg-blue-600 rounded-full"/>
        </span>
            </div>
        </div>
    );
};

export default Header;
