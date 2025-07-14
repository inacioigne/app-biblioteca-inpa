import { TermsAggregationResponse } from "@/lib/types/elastic";
import { Box, Checkbox, Chip, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Typography } from "@mui/material";
import { useState, Dispatch, SetStateAction, useEffect } from "react";

interface authorsProps {
    authors: TermsAggregationResponse;
    filterEnable: boolean;
    setFilterEnable: Dispatch<SetStateAction<boolean>>;
    facets: any,
    setFacets: (facets: any) => void;
    checked: string[];
    setChecked: Dispatch<SetStateAction<string[]>>;
}

export default function Authors(
    { authors,
        filterEnable,
        setFilterEnable,
        facets,
        setFacets,
        checked, 
        setChecked
    }: authorsProps) {

    const handleToggle = (value: string) => () => {
        const currentIndex = checked.indexOf(value);
        const newChecked = [...checked];

        if (currentIndex === -1) {
            newChecked.push(value);
        } else {
            newChecked.splice(currentIndex, 1);
        }

        if (newChecked.length === 0) {
            delete facets.personalNameMain;
            setFacets({
                ...facets,
            })
            console.log(newChecked, facets)
        } else {
            setFacets({
                ...facets,
                personalNameMain: newChecked
            })
            setFilterEnable(false)
        }
        setChecked(newChecked);
    };

    useEffect(() => {
        // setChecked([])
        if (checked.length > 0) {
            setFilterEnable(false)
        }
    }, [])

    return (
        <Box>
            <Typography variant="body2">Autores:</Typography>
            <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
                {authors?.buckets?.map((author, index) => (
                    <ListItem
                        key={index}
                        secondaryAction={
                            <Chip label={author.doc_count} />
                        }
                        disablePadding
                    >
                        <ListItemButton
                            role={undefined}
                            onClick={handleToggle(author.key)}
                            dense>
                            <ListItemIcon>
                                <Checkbox
                                    edge="start"
                                    checked={checked.includes(author.key)}
                                    tabIndex={-1}
                                    disableRipple
                                // inputProps={{ 'aria-labelledby': labelId }}
                                />
                            </ListItemIcon>
                            <ListItemText id={author.key} primary={author.key} />
                        </ListItemButton>
                    </ListItem>
                ))
                }
            </List>
        </Box>
    )
}