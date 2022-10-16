import { Box, Card, CardContent, Typography, styled } from '@mui/material'

const Container = styled(Box)`
  display: flex;
  & > div {
    flex: 1;
    padding: 15px;
  }
`
const ExpenseCard = ({ transactions }) => {
  const amount = transactions.map((transaction) => transaction.amount)
  const income = amount
    .filter((item) => item > 0)
    .reduce((acc, item) => (acc += item), 0)
  const expense =
    amount.filter((item) => item < 0).reduce((acc, item) => (acc += item), 0) *
    -1

  return (
    <Container>
      <Card>
        <CardContent>
          <Typography>Income</Typography>
          <Typography style={{ color: 'green' }}>₹{income}</Typography>
        </CardContent>
      </Card>
      <Card>
        <CardContent>
          <Typography>Expense</Typography>
          <Typography style={{ color: 'red' }}>₹{expense}</Typography>
        </CardContent>
      </Card>
    </Container>
  )
}
export default ExpenseCard