import { render, screen } from '@testing-library/react';
import {Jest} from '@jest/globals'
import App from './App';

test('sign in modal renders', () => {
  render(<App/>);
  const linkElement = screen.getByText(/SIGNUP/i);
  expect(linkElement).toBeInTheDocument();
});

test('Title renders', () => {
  render(<App/>);
  const linkElement = screen.getByText(/Uri's Fantasy name generator/i);
  expect(linkElement).toBeInTheDocument();
});

test('generator form renders', () => {
  render(<App/>);
  const linkElement = screen.getByText(/Race/i);
  expect(linkElement).toBeInTheDocument();
});

test('dwarf race option renders', () => {
  render(<App/>);
  const linkElement = screen.getByText(/Dwarf/i);
  expect(linkElement).toBeInTheDocument();
});

test('elf race option renders', () => {
  render(<App/>);
  const linkElement = screen.getByText(/Elf/i);
  expect(linkElement).toBeInTheDocument();
});

test('Dragonborn race option renders', () => {
  render(<App/>);
  const linkElement = screen.getByText(/Dragonborn/i);
  expect(linkElement).toBeInTheDocument();
});

test('Human (calashite) option renders', () => {
  render(<App/>);
  const linkElement = screen.getAllByText(/Human/i);
  expect(linkElement[0]).toBeInTheDocument();
});

test('Human (chondorathan) option renders', () => {
  render(<App/>);
  const linkElement = screen.getAllByText(/Human/i);
  expect(linkElement[1]).toBeInTheDocument();
});

test('Human (Damaran) option renders', () => {
  render(<App/>);
  const linkElement = screen.getAllByText(/Human/i);
  expect(linkElement[2]).toBeInTheDocument();
});

test('Human (Illuskan) option renders', () => {
  render(<App/>);
  const linkElement = screen.getAllByText(/Human/i);
  expect(linkElement[3]).toBeInTheDocument();
});

test('Gender form renders', () => {
  render(<App/>);
  const linkElement = screen.getByText(/Gender/i);
  expect(linkElement).toBeInTheDocument();
});
