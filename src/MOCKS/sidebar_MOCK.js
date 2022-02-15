import React from "react";
import { ArrowLeftCircleFill, DoorOpen, Lock, Key, Gear, PersonPlus, MenuButton, CheckSquare, LayoutWtf, ListColumnsReverse } from 'react-bootstrap-icons';

export const sidebar_items_pages = [
  {
    item_name: 'Login',
    icon: <ArrowLeftCircleFill className="accordion-icon" />,
    item_options: ['Template 1', 'Template 2', 'Template 3'],
    sidebar: 'Login / Registration'
  },
  {
    item_name: 'Registration',
    icon: <DoorOpen className="accordion-icon" />,
    item_options: ['Template 1', 'Template 2'],
    sidebar: 'Registration'
  },
  {
    item_name: 'Forgot password',
    icon: <Lock className="accordion-icon" />,
    item_options: ['Template 1',],
    sidebar: 'Password'
  },
  {
    item_name: 'Verification',
    icon: <Key className="accordion-icon" />,
    item_options: ['Template 1', 'Template 2', 'Template 3'],
    sidebar: "VERIFICATION"
  },
  {
    item_name: 'Profile',
    icon: <PersonPlus className="accordion-icon" />,
    item_options: ['Template 1', 'Template 2', 'Template 3'],
    sidebar: "PROFILE"
  },
  {
    item_name: 'Settings',
    icon: <Gear className="accordion-icon" />,
    item_options: ['Template 1', 'Template 2', 'Template 3'],
    sidebar: "SETTINGS"
  },
  {
    item_name: 'Dashboard',
    icon: <LayoutWtf className="accordion-icon" />,
    item_options: ['Template 1', 'Template 2', 'Template 3'],
    sidebar: "DASHBOARD"
  },
];

export const sidebar_items_components = [
  {
    item_name: 'Buttons',
    icon: <MenuButton className="accordion-icon" />,
    item_options: ['Template 1', 'Template 2', 'Template 3'],
    sidebar: "BUTTONS"
  },
  {
    item_name: 'Checkbox',
    icon: <CheckSquare className="accordion-icon" />,
    item_options: ['Template 1', 'Template 2'],
    sidebar: "CHECKBOX"
  },
  {
    item_name: 'Dropbox',
    icon: <ListColumnsReverse className="accordion-icon" />,
    item_options: ['Template 1',],
    imsidebarage: "DROPBOX"
  }
];