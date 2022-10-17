import { ListItem, ListItemText, styled } from '@mui/material'
import Chip from '@mui/joy/Chip'
import ChipDelete from '@mui/joy/ChipDelete'

const Detail = styled(ListItem)`
  margin-top: 15px;
`
const Transaction = ({ transaction,setTransactions,transactions }) => {
  const color = transaction.amount > 0 ? 'green' : 'red'
  const handleDelete=(id)=>{
    const temp1=transactions.filter((x)=>x.id!==id)
    setTransactions(temp1);
  }
  return (
    <>
      <Detail style={{ background: color, color: 'white' }}>
        <ListItemText>{transaction.text}</ListItemText>
        <ListItemText>{transaction.amount}</ListItemText>
        <button onClick={()=>{handleDelete(transaction.id)}}>
          <Chip 
            size="lg"
            variant="solid"
            color="danger"
            endDecorator={<ChipDelete />}
          >
            Delete
          </Chip>
        </button>
      </Detail>
    </>
  )
}

export default Transaction
