import Text from './controls/Text'
import Number from './controls/Number'
import Select from './controls/Select'
import Suggest from './controls/Suggest'
import Submit from './controls/Submit'
import { Form as FormComp } from '../form/Form'
import CheckBox from './controls/CheckBox'
// import { Form as BSForm } from 'react-bootstrap'
export interface IForm {
    Text: typeof Text;
    Number: typeof Number;
    Select: typeof Select;
    Suggest: typeof Suggest;
    Submit: typeof Submit;
    CheckBox: typeof CheckBox;
}
const Form: IForm | any = (props: any) => <FormComp {...props} />;
Form.Text = Text;
Form.Number = Number;
Form.Select = Select;
Form.Suggest = Suggest;
Form.Submit = Submit;
Form.CheckBox = CheckBox;

export default Form;