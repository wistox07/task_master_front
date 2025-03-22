import ContentLoader from 'react-content-loader'
import { Card, CardBody } from 'reactstrap'

export default function ContentLoaderTable() {
  return (
    <Card>
      <CardBody>
        <ContentLoader viewBox='0 0 1000 320' backgroundColor='#eaeced' foregroundColor='#ffffff'>
          <rect x='0' y='20' rx='5' ry='80' width='1000' height='40' />
          <rect x='0' y='80' rx='5' ry='5' width='1000' height='20' />
          <rect x='0' y='110' rx='5' ry='5' width='1000' height='20' />
          <rect x='0' y='140' rx='5' ry='5' width='1000' height='20' />
          <rect x='0' y='170' rx='5' ry='5' width='1000' height='20' />
          <rect x='0' y='200' rx='5' ry='5' width='1000' height='20' />
          <rect x='0' y='230' rx='5' ry='5' width='1000' height='20' />
          <rect x='0' y='260' rx='5' ry='5' width='1000' height='20' />
          <rect x='0' y='290' rx='5' ry='5' width='1000' height='20' />
          <rect x='0' y='320' rx='5' ry='5' width='1000' height='20' />
        </ContentLoader>
      </CardBody>
    </Card>
  )
}
