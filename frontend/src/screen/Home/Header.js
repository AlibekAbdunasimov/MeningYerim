import { useForm } from 'react-hook-form'
import { Button, Container, Form } from 'react-bootstrap'

const Header = () => {
    const { register, handleSubmit } = useForm()

    const onSubmit = values => {
        console.log(values)
    }

    return (
        <div
            style={{
                backgroundImage:
                    'url("https://addland.com/media/40491/addland_land_for_sale_s.jpg")',
                backgroundPosition: 'center center',
            }}
            className='py-5'
        >
            <Container>
                <div className='bg-white w-75 mx-auto rounded p-3'>
                    <h2>Yerni qidirish</h2>
                    <Form
                        className='d-flex justify-content-between'
                        onSubmit={handleSubmit(onSubmit)}
                    >
                        <Form.Group>
                            <Form.Control {...register('name')} placeholder='Yer nomini kiriting' />
                        </Form.Group>
                        <Form.Group style={{ width: '100px' }}>
                            <Form.Control
                                {...register('min')}
                                type='number'
                                placeholder='Minumum narx'
                            />
                        </Form.Group>
                        <Form.Group style={{ width: '100px' }}>
                            <Form.Control
                                {...register('max')}
                                type='number'
                                placeholder='Maximum narx'
                            />
                        </Form.Group>
                        <Form.Group>
                            <Form.Select {...register('choose')}>
                                <option value=''>Choose</option>
                                <option value='true'>Arendaga olish</option>
                                <option value='false'>Naxtga olish</option>
                            </Form.Select>
                        </Form.Group>
                        <Button variant='success' type='submit'>
                            Qidirish
                        </Button>
                    </Form>
                </div>
            </Container>
        </div>
    )
}

export default Header
