import "./styles/FilterGroup.css";

const FilterGroup = ({ title, inputType, options }) => {
    return (
        <div className="filter-group-container">
            <h3 className="filter-group-title">{title}</h3>

            <ul className="filter-group-list">
                {options.map((option, index) => (
                    <li key={index} className="filter-group-item">
                        <input type={inputType} id={`filter-${title}-${index}`} name={title} value={option.value || option.text}
                            defaultChecked={option.defaultChecked}
                            className="filter-group-input" />
                        <label
                            htmlFor={`filter-${title}-${index}`}
                            className="filter-group-label" >
                            {option.text}
                        </label>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default FilterGroup;