const container = {
  margin: 20,
  padding: 20,
  border: '1px solid #ddd'
}

const Layout = ({ children }) => (
  <div style={container}>
    {children}
  </div>
)

export default Layout
