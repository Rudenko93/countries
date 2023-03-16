import Select from "react-select"

const options = [
  { value: "Africa", label: "Africa" },
  { value: "America", label: "America" },
  { value: "Asia", label: "Asia" },
  { value: "Europe", label: "Europe" },
  { value: "Oceania", label: "Oceania" },
]

export const CustomSelect = () => {
  return (
    <div className="customSelect">
      <Select
        styles={{
          container: (baseStyles) => ({
            ...baseStyles,
            backgroundColor: "var(--body-ui)",
            color: "var(--body-text)",
            border: "none",
            width: 200,
            fontFamily: "var(--family)",
            boxShadow: "var(--shadow)",
            padding: "1rem 0 ",
          }),
          valueContainer: (baseStyles) => ({
            ...baseStyles,
            backgroundColor: "var(--body-ui)",
            color: "var(--body-text)",
            border: "none",
          }),
          control: (baseStyles) => ({
            ...baseStyles,
            backgroundColor: "var(--body-ui)",
            color: "var(--body-text)",
            border: "none",
            boxShadow: "none",
            cursor: "pointer",
          }),
          option: (baseStyles, state) => ({
            ...baseStyles,
            cursor: "pointer",
            color: "var(--body-text)",
            paddingRight: "0.25rem",
            backgroundColor: state.isSelected
              ? "var(--body-bg)"
              : "var(--body-ui)",
          }),
          singleValue: (baseStyles) => ({
            ...baseStyles,
            backgroundColor: "var(--body-ui)",
            color: "var(--body-text)",
            paddingLeft: "0.25rem",
            fontFamily: "var(--family)",
          }),
          placeholder: (baseStyles) => ({
            ...baseStyles,
            backgroundColor: "var(--body-ui)",
            color: "var(--body-text)",
            paddingLeft: "0.25rem",
            fontFamily: "var(--family)",
          }),
          menuList: (baseStyles) => ({
            ...baseStyles,
            padding: "0px",
            boxShadow: "var(--shadow)",
          }),
          indicatorSeparator: (baseStyles) => ({
            ...baseStyles,
            display: "none",
          }),
        }}
        options={options}
        placeholder="Filter by Region"
        isSearchable={false}
        isClearable
        indicatorSeparator={false}
      />
    </div>
  )
}
