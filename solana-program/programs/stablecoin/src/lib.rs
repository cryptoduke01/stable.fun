use anchor_lang::prelude::*;
use anchor_spl::token::{self, Mint, Token, TokenAccount};
use std::str::FromStr;

declare_id!("YOUR_PROGRAM_ID");

#[program]
pub mod stablecoin {
    use super::*;

    pub fn initialize(ctx: Context<Initialize>, name: String, symbol: String, icon: String, target_currency: String) -> ProgramResult {
        let stablecoin = &mut ctx.accounts.stablecoin;
        stablecoin.name = name;
        stablecoin.symbol = symbol;
        stablecoin.icon = icon;
        stablecoin.target_currency = target_currency;
        Ok(())
    }

    pub fn mint(ctx: Context<Mint>, amount: u64) -> ProgramResult {
        let stablecoin = &ctx.accounts.stablecoin;
        let user_token_account = &ctx.accounts.user_token_account;

        // Fetch the exchange rate from the oracle (pseudo-code)
        let exchange_rate = get_exchange_rate(&stablecoin.target_currency)?;

        // Calculate the amount to mint based on the exchange rate
        let mint_amount = amount * exchange_rate;

        // Mint tokens to the user's account
        token::mint_to(ctx.accounts.into_mint_to_context(), mint_amount)?;

        Ok(())
    }

    pub fn redeem(ctx: Context<Redeem>, amount: u64) -> ProgramResult {
        let stablecoin = &ctx.accounts.stablecoin;
        let user_token_account = &ctx.accounts.user_token_account;

        // Fetch the exchange rate from the oracle (pseudo-code)
        let exchange_rate = get_exchange_rate(&stablecoin.target_currency)?;

        // Calculate the amount to burn based on the exchange rate
        let burn_amount = amount * exchange_rate;

        // Burn tokens from the user's account
        token::burn(ctx.accounts.into_burn_context(), burn_amount)?;

        Ok(())
    }
}

#[derive(Accounts)]
pub struct Initialize<'info> {
    #[account(init, payer = user, space = 8 + 128)]
    pub stablecoin: Account<'info, Stablecoin>,
    #[account(mut)]
    pub user: Signer<'info>,
    pub system_program: Program<'info, System>,
}

#[derive(Accounts)]
pub struct Mint<'info> {
    #[account(mut)]
    pub stablecoin: Account<'info, Stablecoin>,
    #[account(mut)]
    pub user_token_account: Account<'info, TokenAccount>,
    pub mint: Account<'info, Mint>,
    pub token_program: Program<'info, Token>,
}

#[derive(Accounts)]
pub struct Redeem<'info> {
    #[account(mut)]
    pub stablecoin: Account<'info, Stablecoin>,
    #[account(mut)]
    pub user_token_account: Account<'info, TokenAccount>,
    pub token_program: Program<'info, Token>,
}

#[account]
pub struct Stablecoin {
    pub name: String,
    pub symbol: String,
    pub icon: String,
    pub target_currency: String,
}

// Pseudo-function to get the exchange rate from an oracle
fn get_exchange_rate(target_currency: &str) -> Result<u64, ProgramError> {