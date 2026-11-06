import '@testing-library/jest-dom';
import { render } from "@testing-library/react";
import { MainPageContainer } from '..';

it('ппроверяем что компонент рендирится', async () => {
    render(<MainPageContainer/>)
}) 