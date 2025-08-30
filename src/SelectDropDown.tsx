import Checkbox from '@mui/material/Checkbox';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import CheckBoxOutlineBlankIcon from '@mui/icons-material/CheckBoxOutlineBlank';
import CheckBoxIcon from '@mui/icons-material/CheckBox';

const icon = <CheckBoxOutlineBlankIcon fontSize="small" />;
const checkedIcon = <CheckBoxIcon fontSize="small" />;



export interface SelectDropDownProps {
  label: string;
  placeholder: string;
  dataSetTable: Array<{
    provider: string;
    region: string;
    type: string;
  }>;
  columName: string;
}

export const SelectDropDown: React.FC<SelectDropDownProps> = ({label, placeholder, dataSetTable, columName}) =>  {
  
  const dataComp = [...new Set(dataSetTable)]
  
  return (
    <Autocomplete
      multiple
      id="checkboxes-tags-demo"
      options={dataComp}
      disableCloseOnSelect
      getOptionLabel={(dataComp) => dataComp[columName]}
      renderOption={(props, option, { selected }) => {
        const { key, ...optionProps } = props;
        return (
          <li key={key} {...optionProps}>
            <Checkbox
              icon={icon}
              checkedIcon={checkedIcon}
              style={{ marginRight: 8 }}
              checked={selected}
            />
            {dataComp[columName]}
          </li>
        );
      }}
      style={{ width: 500 }}
      renderInput={(params) => (
        <TextField {...params} label={label} placeholder={placeholder} />
      )}
    />
  );
}

