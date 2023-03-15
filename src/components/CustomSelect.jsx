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
    <div>
      <Select
        styles={{
          container: (baseStyles) => ({
            ...baseStyles,
            backgroundColor: "var(--body-ui)",
            color: "var(--body-text)",
            border: "none",
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
            boxShadow: "var(--shadow)",
          }),
          option: (baseStyles, state) => ({
            ...baseStyles,
            cursor: "pointer",
            backgroundColor: "var(--body-ui)",
            color: "var(--body-text)",
            backgroundColor: state.isSelected
              ? "var(--body-bg)"
              : "var(--body-ui)",
            backgroundColor: state.isFocused
              ? "var(--body-bg)"
              : "var(--body-ui)",
          }),
          singleValue: (baseStyles) => ({
            ...baseStyles,
            backgroundColor: "var(--body-ui)",
            color: "var(--body-text)",
          }),
          placeholder: (baseStyles) => ({
            ...baseStyles,
            backgroundColor: "var(--body-ui)",
            color: "var(--body-text)",
          }),
          menuList: (baseStyles) => ({
            ...baseStyles,
            padding: "0px",
          }),
        }}
        options={options}
        placeholder="Filter by Region"
        isSearchable={false}
        isClearable
      />
    </div>
  )
}
