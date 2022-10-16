import { ListItem, ListItemText, styled } from '@mui/material'
import Chip from '@mui/joy/Chip'
import ChipDelete from '@mui/joy/ChipDelete'

const Detail = styled(ListItem)`
  margin-top: 15px;
`
const Transaction = ({ transaction }) => {
  const color = transaction.amount > 0 ? 'green' : 'red'
  return (
    <>
      <Detail style={{ background: color, color: 'white' }}>
        <ListItemText>{transaction.text}</ListItemText>
        <ListItemText>{transaction.amount}</ListItemText>
        <button>
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
